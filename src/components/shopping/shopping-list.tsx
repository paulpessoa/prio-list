'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/providers/AuthProvider';
import { useShoppingLists } from '@/hooks/useShoppingLists';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LogIn, Lock, Unlock, Plus, Trash2, LogOut, Moon, Sun, NotebookTabs } from 'lucide-react';
import { CreateListForm } from './create-list-form';
import { ListItem } from './list-item';
import { ShareDialog } from './share-dialog';
import type { SharePermissions } from './types';

export function ShoppingList() {
  const router = useRouter();
  const { user, signOut, loading } = useAuth();
  const [newItem, setNewItem] = useState('');

  const {
    listsShop,
    createList,
    addItem,
    toggleItemComplete,
    deleteItem,
    deleteList,
    toggleListPublic,
  } = useShoppingLists();

  const handleShare = (listId: string, email: string, permissions: SharePermissions) => {
    console.log('Compartilhando lista', { listId, email, permissions });
  };

  const [isDark, setIsDark] = useState(false);

  // Toggle dark mode by adding/removing class to html element
  const toggleDarkMode = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center text-2xl font-bold">
          <NotebookTabs className="mr-2" />
          Lista Pronta</div>



        {user && !loading ? (
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button onClick={signOut} className="flex items-center gap-2" variant="ghost">
              <LogOut className="w-4 h-4" />
              Sair
            </Button>
          </div>
        ) : (

          <div className='flex justify-end items-center gap-2'>
            <Button onClick={() => router.push('/login')} className="flex items-center gap-2">
              <LogIn className="w-4 h-4" />
              Login
            </Button>

            {!user && !loading && (
              <Button variant="success" onClick={() => router.push('/magic-link')} className="flex items-center gap-2">
                <LogIn className="w-4 h-4" />
                Acesso Rápido
              </Button>
            )}
          </div>
        )}
      </div>

      <CreateListForm onCreateList={createList} />

      <div className="space-y-4">
        {listsShop.map(list => (
          <Card key={list.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{list.name}</CardTitle>
                <div className="flex gap-2">
                  {user && !loading && (
                    <>
                      <ShareDialog
                        listId={list.id}
                        listName={list.name}
                        onShare={(email, permissions) => handleShare(list.id, email, permissions)}
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => toggleListPublic(list.id)}
                      >
                        {list.is_public ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                      </Button>
                    </>
                  )}
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => deleteList(list.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-4">
                <Input
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  placeholder="Adicionar item"
                  className="flex-1"
                />
                <Button onClick={() => {
                  addItem(list.id, newItem);
                  setNewItem('');
                }}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              {list?.items ? (
                <ul className="space-y-2">
                  {list.items.map(item => (
                    <ListItem
                      key={item.id}
                      item={item}
                      onToggleComplete={() => toggleItemComplete(list.id, item.id)}
                      onDeleteItem={() => deleteItem(list.id, item.id)}
                    />
                  ))}
                </ul>
              )
                : <p className="text-gray-500">Nenhum item na lista</p>
              }
            </CardContent>
          </Card>
        ))}
      </div>


    </div>
  );
}