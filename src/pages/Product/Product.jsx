import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../store/cardSlice';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { id } = useParams()
    const { data } = useGetProductQuery(id)
    console.log(data);
    return (
        <div className="container">
            <div className="crumbs">
                <ul className="breadcrumbs">
                    <Link to={'/'}> 
                        <a href="/" title="Главная" itemprop="item">
					        <span itemprop="name">Главная &nbsp; — &nbsp;&nbsp;</span>
				        </a>
                    </Link>
                    <Link to={'/'}> 
                        <a href="/" title="Хит продаж" itemprop="item">
					        <span itemprop="name">Хит продаж &nbsp; — &nbsp;&nbsp;</span>
				        </a>
                    </Link>
                    <li className="crumb active">{data?.title}</li>
                </ul>
            </div>
            <div className='product__wrap'>
                <div className="product__left">
                    <img className='img' src={data?.image} alt="" />
                </div>
                <div className="product__right">
                    <div className="product__right-upper">
                        <h1 className='title'>{data?.title}</h1>
                        <p className="price">Цена: {data?.price}</p>
                        <div className="product-options">
                            <div className="counter js-counter">
                                <button type="button" className="counter-btn counter__minus">-</button>
                                <h1 type="number" value="1" className="counter-number">1</h1>
                                <button type="button" className="counter-btn counter__plus">+</button>
                            </div>
                            <button type="button" className="basket-btn js-add-to-cart" data-id="1627">В корзину</button>
                            <button type="button" className="fav-btn js-favorite" data-id="1627">
                                <svg id="icon-heart" viewBox="-64 -66 640 600">
                                    <path d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0" stroke-width="55" stroke="#FF5555" fill="#fff"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="product__buttons">
                            <a href="" className="product-buttons__option js-fast-order-form" data-id="1627">Купить в один клик</a>
                        </div>
                        <div className="product__item">
                            <div className="product__item-title">
                                <span>Способы оплаты</span>
                                <div className="product__payment">
                                    <div className="product__payment-item">
                                        <div className="product__payment-item-img">
                                            <img src="./src/assets/product/money-bill-wave-alt.png" alt=""/>
                                        </div>
                                        Наличными
                                    </div>
                                    <div className="product__payment-item">
                                        <div className="product__payment-item-img">
                                            <img src="./src/assets/product/credit-card.png" alt=""/>
                                        </div>
                                        Картой
                                    </div>
                                    <div className="product__payment-item">
                                        <div className="product__payment-item-img">
                                            <img src="./src/assets/product/university.png" alt=""/>
                                        </div>
                                        На к/р
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="why">
                <h2>Почему мы?</h2>
                <div className="why__wrap">
                    <div className="why__item">
                        <div className="why__item-img">
                            <img src="./src/assets/product/why/why1.png" alt=""/>
                        </div>
                        <p>Доставим в срок</p>
                    </div>
                    <div className="why__item">
                        <div className="why__item-img">
                            <img src="./src/assets/product/why/why2.png" alt=""/>
                        </div>
                        <p>Цветы простоят от 6 дней</p>
                    </div>
                    <div className="why__item">
                        <div className="why__item-img">
                            <img src="./src/assets/product/why/why3.png" alt=""/>
                        </div>
                        <p>Возвращаем до 15% бонусами</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
