"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import {
  Moon, Sun,
  // Facebook, Twitter, Instagram, 
  NotebookTabs,
  ClipboardList
} from "lucide-react";
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/providers/AuthProvider';
import { LogIn } from 'lucide-react';

export default function Page() {
  const router = useRouter();
  const { user} = useAuth();

  const [isDark, setIsDark] = useState(false);

  // Toggle dark mode by adding/removing class to html element
  const toggleDarkMode = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen font-sans">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-8">
          <div className="flex items-center text-2xl font-bold">
            <NotebookTabs className="mr-2" />
            Lista Pronta</div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            {user ? (
              <Button variant="ghost" onClick={() => router.push('/lists')}>
                <ClipboardList className="w-4 h-4" />
                Listas</Button>
            ) :
              
             (
              <Button onClick={() => router.push('/login')}>
                <LogIn className="w-4 h-4" />

                Acessar</Button>
            )}


          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container p-12 md:py-24 lg:py-32">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Crie e compartilhe suas listas facilmente
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Com o Lista Pronta, você pode criar listas de compras e compartilhá-las com pessoas da sua família, amigos e colegas de trabalho. Mantenha suas compras organizadas e otimize seu tempo no supermercado.
              </p>
            </div>
            <div className="flex-1">
              <img
                src="/images/happy-young-company-smiling-friends-sitting-park-using-smartphones-man-women-having-fun-together_285396-8744.jpg"
                alt="Shopping"
                className="rounded-3xl object-cover w-full aspect-video"
              />
            </div>
          </div>
        </section>

        {/* <section className="container py-12 bg-muted/50">
          <h2 className="text-3xl font-bold text-center mb-12">Simplifique suas compras</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 space-y-4">
                <img
                  src="/images/grocery-shopping-online-home-delivery-concept_795097-2006.avif"
                  alt="Criar listas"
                  className="rounded-lg w-full aspect-video object-cover"
                />
                <h3 className="text-xl font-semibold">Crie listas em minutos</h3>
                <p className="text-muted-foreground">
                  Com o Lista Pronta, criar uma lista de compras se torna uma tarefa rápida e descomplicada. Esqueça os papéis e notas perdidas. Nossa plataforma permite que você adicione itens, defina quantidades, preços e até deixe comentários em cada item. Isso significa que, independentemente de onde você esteja, sua lista de compras estará sempre à mão, atualizada e acessível. Além disso, a possibilidade de marcar itens como checados facilita o acompanhamento do que já foi comprado, evitando assim compras duplicadas e garantindo que nada seja esquecido.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <img
                  src="/images/couple-supermarket-reading-shopping-list_171337-2395.jpg"
                  alt="Compartilhar"
                  className="rounded-lg w-full aspect-video object-cover"
                />
                <h3 className="text-xl font-semibold">Compartilhe com quem quiser</h3>
                <p className="text-muted-foreground">
                  O diferencial do Lista Pronta está na sua capacidade de compartilhamento. Você pode facilmente enviar suas listas por e-mail para sua esposa, familiares ou qualquer pessoa que participe das compras. Isso não apenas facilita a organização como também promove uma colaboração efetiva entre todos. Cada lista pode ser configurada como privada ou pública, e os convites enviados incluem permissões específicas, como editar, comentar ou deletar itens. Isso significa que a gestão da lista de compras se torna uma atividade coletiva, onde todos podem contribuir, garantindo que as necessidades de todos sejam atendidas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <img
                  src="/images/woman-with-smart-phone-supermarket-standing-by-shelves-full-fruit-grocery-store-holding-thumbs-up_342744-1091.jpg"
                  alt="Controle"
                  className="rounded-lg w-full aspect-video object-cover"
                />
                <h3 className="text-xl font-semibold">Mantenha o controle total</h3>
                <p className="text-muted-foreground">
                  Com o Lista Pronta, você mantém o controle total sobre suas listas de compras. Apenas os criadores das listas têm o poder de deletá-las, garantindo assim que suas listas permaneçam intactas até que você decida o contrário. Isso é especialmente útil em famílias grandes ou para quem gosta de manter um histórico de compras anteriores para referência futura. Além disso, a funcionalidade de permissões específicas para cada convite assegura que apenas as pessoas certas possam fazer alterações em suas listas. Isso não apenas protege sua lista de alterações indesejadas, mas também promove uma organização eficiente e sem estresse.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container py-12">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6 text-center space-y-4">
              <p className="text-xl italic">
                O Compartilha Lista revolucionou a maneira como organizamos nossas compras em família.
              </p>
              <p className="text-sm text-muted-foreground">- Emanoel Tenório</p>
            </CardContent>
          </Card>
        </section>

        <section className="container py-12 text-center space-y-6">
          <h2 className="text-3xl font-bold">Experimente agora.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Desde que começamos a usar o Compartilha Lista, a organização das nossas compras melhorou significativamente...
          </p>
          <Button size="lg">Acessar App</Button>
        </section> */}
      </main>

      {/* <footer className="border-t">
        <div className="container py-8 space-y-4">
          <div className="text-center text-sm text-muted-foreground">
            © 2024 todos os direitos reservados.
          </div>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </footer> */}
    </div>
  );
}