import { Box, Button, Container, Paper, TextField, Typography } from '@material-ui/core'
import { useState } from 'react'

function App () {
  const [words, setWords] = useState('')
  const [results, setResults] = useState([])
  // const [result, setResult] = useState('')

  const handleProcessWords = () => {
    const wordsArray = words.split(',')
    setResults(wordsArray)
  }

  const renderResult = (wordsArray) => {
    if (wordsArray.length > 0) {
      const finalResult = []
      wordsArray.forEach(element => {
        finalResult.push(element.trim())
        finalResult.forEach(tw => {
          if (tw.trim() !== element.trim()) { finalResult.push(`${tw.trim()}, ${element.trim()}`) }
        })
      })

      return (
        <Box>
          <Paper elevation={3} style={{ padding: '2%' }}>
            <Typography variant='h5' style={{ marginBottom: '8px' }}>
              Results
            </Typography>
            <hr />
            <ul>
              {finalResult.map(res => {
                return (
                  <li key={res}>{res}</li>
                )
              })}
            </ul>
          </Paper>
        </Box>
      )
    }
  }

  return (
    <Container maxWidth='md' style={{ marginTop: '2%' }}>
      <Box my={5}>
        <Typography variant='h5' style={{ marginBottom: '8px' }}>
          Enter all words separated by comma (",")
        </Typography>
        <TextField
          style={{ marginBottom: '10px' }}
          label='Ex: word1, word2, word3, ...'
          variant='outlined'
          fullWidth
          onChange={(e) => setWords(e.target.value)}
        />
        <Button variant='contained' color='primary' onClick={handleProcessWords}>
          Process Words
        </Button>
      </Box>
      {renderResult(results)}
    </Container>
  )
}

export default App
