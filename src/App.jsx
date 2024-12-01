import "./styles.css";
import {companies} from './companies'
import {products} from './products'

import withToggles from "./HOC";

import ProductItem from "./components/ProductItem";
import List from './components/List'
import ProductList from './components/ProductList'
import CompanyItem from "./components/CompanyItem";


const ProductListWithToggles = withToggles(ProductList);

export default function App() {
  return (
    <div>
      <h1>Render Props Demo</h1>

      <div className="col-2">
        <List
          title="Products"
          items={products}
          render={(product) => (
            <ProductItem key={product.productName} product={product} />
          )}
        />

        <List
          title="Companies"
          items={companies}
          render={(company) => (
            <CompanyItem
              key={company.companyName}
              company={company}
              defaultVisibility={false}
            />
          )}
        />
      </div>

      <div className="col-2">
        <ProductList title="Products HOC" items={products} />
        <ProductListWithToggles title="Products HOC" items={products} />
      </div>
    </div>
  );
}
