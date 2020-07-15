import Layout from '../../components/Layout'
import {useEffect, useState} from 'react'
import Button from '@material-ui/core/Button'
import styles from './foo.module.scss'
import styled from 'styled-components'

interface EvObj {
  target: Object
}

let theme = {
  color: {
    primary: 'red',
    secondary: '#ccc'
  }
}

let Btn = styled.button`
  color: ${theme.color.primary};
  background: ${theme.color.secondary};
  padding: 12px;
`

let Title = styled('h1')`
  color: white;
`

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
  })

  function handleDrag (event: EvObj): void {
    console.log('DRAG START ', event)
    console.log('drag target ', event.target)
  }

  return (
    <Layout>
      <Title>
        {state.length ? state : 'loading..' }
      </Title>
      <p className={styles.text}>
        this is a paragraph
        <Button variant='contained' color='primary'>
          Click Me
        </Button>
          <Btn>
            grr
          </Btn>
      </p>
      <div draggable={true} onDragStart={handleDrag}>
        Drag Me
      </div>
    </Layout>
  )
}

export default Foo