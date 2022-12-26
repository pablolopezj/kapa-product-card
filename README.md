# kapa-Product-Card

Product library for testing purposes

## Example:

````
import {ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons} from "paka-product-card"
````



```
    <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, count, increaseBy }) => (
          <>
            <ProductImage  />
            <ProductTitle  />
            <ProductButtons />
          </>
        )}
    </ProductCard>

```
