import React from 'react';

const Payment = () => {
    return (
        <div className='payment'>
            <div className="container">
                <h1>Способы оплаты</h1>
                <p>Виды оплаты товаров в инернет-магазине стандартно делятся на наличный и безналичный расчет.</p>
                <div className="con">
                    <h2>1. Наличный расчет</h2>
                    <p>Наличными можно расплатиться в торговом оптово-розничном центре или непосредственно с курьером, доставившим товар.</p>
                </div>
                <div className="con">
                    <h2>Наличными можно расплатиться в торговом оптово-розничном центре или непосредственно с курьером, доставившим товар.</h2>
                    <div className="con1">
                        <p>— &nbsp; Visa. Оплата через Visa онлайн (выставление счета по реквизитам, указанным на сайте магазина) требует времени. Операция занимает несколько рабочих дней.</p>
                    </div>
                    <div className="con1">
                        <p>— &nbsp; Кредитной карточкой можно оплатить покупку в торговом оптово-розничном центре (через терминал) или через сайт онлайн-платеж.</p>
                    </div>
                    <div className="con1">
                        <p>— &nbsp; Со счета в банке по реквизитам, указанным на сайте. Эта операция также займет несколько рабочих дней.</p>
                    </div>
                    <p className='pa'>ООО «СП Букет» </p>
                    <p>Юридический адрес: 107553, Г.Ош.   Жапалак.  Ул. М.Маматеминова 12 <br />ИНН: 7718885232 <br />КПП: 771801001 <br />Расчетный счет: 40702810300080016673<br />Кор. счет: 30101810900000000521<br />Банк: OPTIMAБАНК ОАО <br />БИК: 044525521 <br /></p>
                </div>
                <div className="con">
                    <h2>3. Электронные деньги</h2>
                    <div className="con1">
                        <p>— &nbsp; Mbank (MB). Это наиболее простой, современный и безопасный способ оплаты в режиме реального времени. Для оплаты через MB необходимо зарегистрироваться на сайте mbank.kg (завести почту) и пополнить счет, который прикрепится к почтовому ящику автоматически. Пополнить счет можно через банковскую карту, денежный перевод или через терминалы. Перед тем, как оплатить заказ, убедитесь, что средств на счете достаточно.</p>
                    </div>
                    <div className="con1">
                        <p>— &nbsp; Balanskg (Balans). Система Balans позволяет завести кошельки в сомах. Для оплаты в интернет-магазине нужен кошелек в сомах.</p>
                    </div>
                    <p>ВАЖНО: Условия, опубликованные на сайте (в том числе – цены) не являются публичной офертой.</p>
                </div>
                <div className="con">
                    <h2>Профессионализм операторов и флористов</h2>
                    <p>Компания ФлораМаркт во главу угла ставит не только высокое качество самих цветов, но и качество предоставляемых услуг. Именно поэтому в компании работают только профессионалы.
                       Опытные операторы на телефоне всегда помогут подобрать подходящий букет по случаю, а профессиональные флористы, победители многочисленных флористических конкурсов, создадут для Вас оригинальные и неповторимые букеты и цветочные композиции на заказ.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Payment;
