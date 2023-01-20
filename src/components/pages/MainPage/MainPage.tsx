import React from 'react';
import './mainPage.scss';
import {useGetApodQuery} from "../../../store/apod/apod.api";

const MainPage: React.FC = () => {

    const {data, isLoading, error, isError} = useGetApodQuery("04r4kB79aWIjm79buE1Iq7YWVqUnv38AbUcl8U8D")

    return (
        <section className="apod-page">
            <div className="apod-page__wrapper">
                {isLoading ? (
                    <div
                        className="apod-page__preloader">
                        Wait, please...
                    </div>
                ) : isError ? (
                    <div
                        className="error-message">
                        <p className="error-message__status">{JSON.stringify(error.status)}</p>
                        <p className="error-message__code">{JSON.stringify(error.data.error.code).split('"')[1].split('"')[0]}</p>
                        <p className="error-message__message">{JSON.stringify(error.data.error.message).split('"')[1].split('"')[0]}</p>
                    </div>
                ) : (
                    <div className="apod">
                        <div className="apod__wrapper">
                            <div className="img">
                                <div className="imag__copyright-box">
                                    <p className="imag__copyright-box__text">Image Credit &
                                        Copyright:</p>
                                    <p className="imag__copyright-box__name">{data?.copyright}</p>
                                </div>
                                <div className="imag__wrapper">
                                    <img className="bodyurl" src={data?.url} alt={data?.title}/>
                                </div>
                            </div>
                            <div className="info">
                                <p className="info__date">{data?.date}</p>
                                <p className="info__title">{data?.title}</p>
                                <p className="info__description">{data?.explanation}</p>
                                <div className="btn">
                                    <a className="btn__link" href={data?.hdurl} target="_ blank">
                                        <button className="btn__btn">
                                            SEE IMAGE IN HIGH QUALITY
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default MainPage;
