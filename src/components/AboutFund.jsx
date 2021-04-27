import React from 'react';
import {Link} from "react-router-dom";

export class AboutFund extends React.Component{
    render(){
        return(
            <section className="home-about-area mt-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 home-about-left no-padding">
                            <img src='img/common/mood3.jpeg' alt="director"/>
                        </div>
                        <div className="col-lg-6 home-about-right no-padding">
                            <h1>
                                Благотворительный фонд помощи бездомным животным
                                "БУДУ РЯДОМ"
                            </h1>
                            <h5>Помогаем хвостатым и людям, не оставившим их в беде.</h5>
                            <p>
                                <i>Фонд "Буду рядом" существует с 2017 года и является полностью благотворительным. У фонда нет финансовой поддержки от государства. Только помощь неравнодушных людей, наших единомышленников - тех, кто помогает брошенным на произвол судьбы животным в любви и заботе дождаться домашней жизни, получить качественное медицинское обслуживание, вновь довериться человеку.</i>
                            </p>
                            <p>
                                Мы помогаем животным сами. И помогаем людям, которые не смогли пройти мимо чужой шерстяной беды. Поддерживаем волонтерское движение и улучшаем условия проживания животных в приютах. Помогаем волонтёрам пенсионного возраста. Мы создали #догдом и #кэтдом , где в комфортных условиях животные дожидаются встречи со своими людьми и переезда к ним на ПМЖ. Создаём благоприятные условия для социализации животных и подбираем им самые лучшие и ответственные семьи. На сегодняшний день под личной опекой фонда находится: <Link to="/gallery">15 собак и 8 кошек</Link>. Вместе с тем, в сумме, мы поддерживаем и помогаем более 1500 животных из муниципальных и частных приютов.
                            </p>
                            <p>
                                <b>Кто мы?</b> Президент фонда - Яна Баринова и несколько добровольцев, которые искренне верят, что у каждого домашнего животного должен быть этот самый настоящий дом и заботливый человек рядом. Мы обычные люди с обычными заботами, просто стараемся вносить свой посильный вклад в доброе дело. И мы всегда рады пополнению в наших рядах.
                            </p>
                            <p>
                                Всегда ваши,<br />🐱🐶БФ "Буду рядом"
                            </p>
                            <Link to="/help" className="primary-btn text-uppercase mb-5">Помочь</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}