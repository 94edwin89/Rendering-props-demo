# Render Props and Higher-Order Components Demo

This project demonstrates how to use **render props** and **higher-order components (HOCs)** 
in a React application to handle reusable logic and component rendering. 

## Features

- **Render Props**: A pattern for sharing code between React components by passing a render 
function as a prop.
- **Higher-Order Components (HOCs)**: A technique for reusing component logic by wrapping 
components.
- **Dynamic Lists**: Rendered lists with toggle functionalities (expand/collapse and 
partial display).

---

## Project Structure

### Components
1. **`List`**  
   A generic list component that:
   - Toggles between open and closed states.
   - Allows partial display of items (e.g., showing only the first three).
   - Uses a render prop to define the item rendering logic.

2. **`ProductItem`**  
   Displays individual product details, including name, price, and description.

3. **`CompanyItem`**  
   Displays company information with a hover effect for additional details.

4. **`ProductList`**  
   Renders a list of products. This component is considered immutable (e.g., from 
   a 3rd-party library).

### Higher-Order Components
- **`withToggles`**  
  A HOC that adds toggle functionality (expand/collapse and partial display) to wrapped
   components, such as `ProductList`.

### Data
- **`products`**  
  An array of dynamically generated products using `@faker-js/faker`.
  
- **`companies`**  
  An array of dynamically generated company data using `@faker-js/faker`.

---

## Getting Started

### Prerequisites
- Node.js (version 16+)
- npm or yarn

### Installation
1. Clone the repository.
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory.
   ```bash
   cd render-props-demo
   ```
3. Install dependencies.
   ```bash
   npm install
   ```

### Development
Run the development server:
```bash
npm run dev
```
Visit the app at `http://localhost:5173`.

### Build
To build the app for production:
```bash
npm run build
```
Serve the production build locally:
```bash
npm run preview
```

---

## Usage

### Render Props Example
The `List` component demonstrates the **render props** pattern by accepting a `render`
 prop to define how items are rendered:
```jsx
<List
  title="Products"
  items={products}
  render={(product) => <ProductItem key={product.productName} product={product} />}
/>
```

### Higher-Order Component Example
The `withToggles` HOC enhances the `ProductList` component with additional toggle 
functionality:
```jsx
const ProductListWithToggles = withToggles(ProductList);

<ProductListWithToggles title="Products HOC" items={products} />;
```

---

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **@faker-js/faker**: A library for generating fake data.
- **Vite**: A fast development build tool.
- **ESLint**: A static code analysis tool to enforce coding standards.

---

## License

This project is licensed under the MIT License. 

Feel free to modify and use this code in your projects! 🚀