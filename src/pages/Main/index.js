import React, { useState, useEffect } from 'react'
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import api from '~/services/api'

import { Container, Title, Form, SubmitButton, List } from './styled'

export default function Main() {
  const [newRepo, setNewRepo] = useState('')
  const [repositories, setRepositories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const data = localStorage.getItem('repositories')
    if (data) {
      setRepositories(JSON.parse(data))
    }
  }, [])

  function handleInput(e) {
    const info = e.target.value
    setNewRepo(info)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const response = await api.get(`/repos/${newRepo}`)
    const data = { name: response.data.full_name }
    setRepositories([...repositories, data])
    setNewRepo('')
    setLoading(false)
    localStorage.setItem('repositories', JSON.stringify(repositories))
  }

  return (
    <Container>
      <Title>
        <FaGithubAlt />
        Repositórios
      </Title>
      <Form onSubmit={handleSubmit}>
        <input type="text" placeholder="Adicionar repositório" value={newRepo} onChange={handleInput} />
        <SubmitButton loading={loading}>
          {loading ? <FaSpinner color="#fff" size={14} /> : <FaPlus color="#fff" size={14} />}
        </SubmitButton>
      </Form>
      <List>
        {repositories.map(repository => (
          <li key={repository.name}>
            <span>{repository.name}</span>
            <Link to={`/repository/${encodeURIComponent(repository.name)}`}>Detalhes</Link>
          </li>
        ))}
      </List>
    </Container>
  )
}
