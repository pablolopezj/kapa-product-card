import React from 'react';
import rendered from 'react-test-renderer';
import { product1 } from '../data/products';
import { ProductCard } from '../../src/components';

const { act } = rendered;

describe('Product Card', () => {
  test('Should display the component correctly', () => {
    const wrapper = rendered.create(
      <ProductCard product={product1}>
        {() => <h1>Product Card</h1>}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchInlineSnapshot(`
      <div
        className="productCard undefined"
      >
        <h1>
          Product Card
        </h1>
      </div>
    `);
  });

  test('should increment the counter', () => {
    const wrapper = rendered.create(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}> + </button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="productCard undefined"
      >
        <h1>
          Product Card
        </h1>
        <span>
          0
        </span>
        <button
          onClick={[Function]}
        >
           + 
        </button>
      </div>
    `);
    act(() => {
      (tree as any).children[2].props.onClick();
    }) 

    tree = wrapper.toJSON();

    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
