export type ShoppingItem = {
  id: number;
  name: string;
  completed: boolean;
};

export type ShoppingList = {
  id: string;
  name: string;
  items?: ShoppingItem[];
  is_public: boolean;
  created_at: string;
  user_id: string | null;
};

export type ItemByList = {
  id: string;
  name: string;
  list_id: string;
  completed: boolean;
  created_at: string;
  created_by: string;
};

export type SharePermissions = {
  can_edit: boolean;
  can_delete: boolean;
  can_share: boolean;
  can_comment: boolean;
};
