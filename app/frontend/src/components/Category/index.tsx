/* eslint-disable max-len */
import { useContext, useRef, useEffect, useState } from 'react';
import CategoryButton from '../CategoryButton/CategoryButton';
import Context from '../../context/Context';
import { ItemButton, InnerCarousel, Carousel } from './Category.styles';

export default function Category() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<any>();

  const { getCategories, getSelectedCategory } = useContext(Context);
  const allCategories = getCategories();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [allCategories]);

  return (
    <section>
      { allCategories.length === 0 && '' }
      <Carousel ref={ carousel } className="carousel" whileTap={ { cursor: 'grabbing' } }>
        <InnerCarousel drag="x" dragConstraints={ { right: 0, left: -width - 20 } } className="inner-carousel">
          { allCategories
            && allCategories.map(
              (category, i) => (
                <ItemButton className="item" key={ `${category}[${i}]` }>
                  <CategoryButton
                    strCategory={ category }
                    getSelectedCategory={ getSelectedCategory }
                  />
                </ItemButton>
              ),
            )}
        </InnerCarousel>
      </Carousel>
    </section>
  );
}
