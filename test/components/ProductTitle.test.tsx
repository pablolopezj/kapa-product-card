import React from 'react';
import rendered from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTtile', () => {
  test('Should show title component with the personalized title', () => {
    const wrapper = rendered.create(<ProductTitle title="Custom product" />);
    expect(wrapper.toJSON()).toMatchInlineSnapshot(`
      <span
        className="productDescription undefined"
      >
        Custom product
      </span>
    `);
  });

  test('Should show the component with the product name', () => {
    const wrapper = rendered.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchInlineSnapshot(`
      <div
        className="productCard undefined"
      >
        <span
          className="productDescription undefined"
        >
          Coffe Mug - Card without image
        </span>
      </div>
    `);
  });
});
