import request from 'superagent'
import { Comic, ComicData } from '../../models/comics.ts'

const rootUrl = '/api/v1'

export async function getComics(): Promise<Comic[]> {
  const response = await request.get(`${rootUrl}/comics`)
  return response.body.comics as Comic[]
}

export async function addComic(comic: ComicData): Promise<unknown> {
  return request.post(`${rootUrl}/comics`).send(comic)
}
