// Utility Types
type Product = {
    id: number;
    name: string;
    price: string;
    stock: number;
    color?: string;
};

type ProductSummary = Pick<Product, 'id' | 'name' | 'price'>;
type ProductWithoutStock = Omit<Product, 'stock' | 'color'>;
type ProductWithColor = Required<Product>;
type OptionalProduct = Partial<Product>;
type ReadOnlyProduct = Readonly<Product>;

const product: ProductWithColor = {
    id: 1,
    name: 'Mouse',
    price: '20',
    stock: 100,
    color: 'Black',
};


// ✅ Use Case: Modify existing types easily — pick, omit, make optional, required, etc.
