import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import api from '~/services/api'

import { Container, Loading, Owner, IssueList } from './styled'

export default function Repository({ match }) {
  const [repository, setRepository] = useState({})
  const [issues, setIssues] = useState([])
  const [loading, setLoading] = useState(true)

  async function something() {
    const repoName = decodeURIComponent(match.params.repository)
    const [repositoryResponse, issuesResponse] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ])
    setLoading(false)
    setRepository(repositoryResponse.data)
    setIssues(issuesResponse.data)
  }

  useEffect(() => {
    something()
  }, [])

  return loading
    ? (
      <Loading>Carregando...</Loading>
    )
    : (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner?.avatar_url} alt={repository.owner?.login} />
          <h1>{repository?.name}</h1>
          <p>{repository?.description}</p>
        </Owner>
        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue?.user.avatar_url} alt={issue?.user.login} />
              <div>
                <strong>
                  <a href={issue?.html_url}>{issue?.title}</a>
                  {issue?.lab}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
      </Container>
    )
}

Repository.propTypes = { match: PropTypes.string.isRequired }
