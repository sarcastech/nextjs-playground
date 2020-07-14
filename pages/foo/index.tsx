import Layout from '../../components/Layout'
import {useEffect, useState} from 'react'
import styles from './foo.module.scss'

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  try {
    const posts: string[]  = ['cat', 'dog']

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  } catch(e){
    console.log('error ', e)
  }
}

type Props = {
  posts: string[]
}

function Foo ({posts}: Props) {
  let [state, setState] = useState('')

  function hello (str: string = 'hello'): string {
    window.alert(str)
    return str
  }
  
  useEffect(() => {
    // if (typeof window !== 'undefined') {
    //   window.alert(posts[1])
    // }
  
    setState(posts[0])
  }, [])

  return (
    <Layout>
      <h1 className={styles.title}>
        {state.length ? state : 'loading..' }
      </h1>
      <p className={styles.text}>
        this is a paragraph
      </p>
    </Layout>
  )
}

export default Foo