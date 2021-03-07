import React, { useEffect } from 'react'
import styles from './style.module.scss'
import Header from '@Components/Header'
import Footer from '@Components/Footer'
import Filter from '@Components/Filter'
import GridList from '@Components/GridList'
import GridItem from 'src/Elements/GridItem'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from 'src/Redux/Actions/index'

const Movies = () => {
  const dispatch = useDispatch()
  const { movies, isLoading, message } = useSelector((state) => state.postData)

  useEffect(() => {
    message === '' ? dispatch(getData()) : console.log('dolu')
  }, [])

  return (
    <>
      <Header subtitle={'Movies'} />
      <main className={styles.main}>
        <div className={styles.container}>
          {isLoading ? null : <Filter />}
          <GridList>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              [
                movies &&
                  movies.map((item) => (
                    <GridItem
                      key={item.title}
                      postersrc={item.images['Poster Art'].url}
                      title={item.title}
                    />
                  )),
              ]
            )}
          </GridList>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Movies
