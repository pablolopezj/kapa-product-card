import React from 'react';
import rendered from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('Should show ProductImage component with the personalized image', () => {
    const wrapper = rendered.create(<ProductImage img="http://test_img.jpg" />);
    expect(wrapper.toJSON()).toMatchInlineSnapshot(`
      <img
        alt="product-img"
        className="productImg undefined"
        src="http://test_img.jpg"
      />
    `);
  });

  test('Should show ProductImage component with the image of the product', () => {
    const wrapper = rendered.create(
      <ProductCard product={product2}>
        {() => <ProductImage></ProductImage>}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchInlineSnapshot(`
      <div
        className="productCard undefined"
      >
        <img
          alt="product-img"
          className="productImg undefined"
          src="./coffee-mug.png"
        />
      </div>
    `);
  });
});
