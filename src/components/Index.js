import React, { useState } from 'react'
import data from '../data'
import SingleWord from './SingleWord'

const Index = () => {
    const [words, setWords] = useState(data)
    return (
      <div className="main">
        <div className="container">
          <h3>Random Questions and Answers </h3>
          <section className="info">
            {words.map((word) => {
              return <SingleWord key={word.id} {...word} />;
            })}
          </section>
        </div>
      </div>
    );
}

export default Index
