import fs from 'fs'
import path from 'path'

export type Challenge = {
  id: string
  title: string
  link: string
  fontUrl: string
}

const challengesDirectory = path.join(process.cwd(), 'challenges')
const challenges = fs.readdirSync(challengesDirectory)

export const getChallenges = () => challenges.map((challengeId) => getChallenge(challengeId))

export const getChallenge = (id: string): Challenge => ({
  id,
  ...JSON.parse(fs.readFileSync(path.join(challengesDirectory, id, 'config.json'), 'utf-8')),
})

export const getAllChallengePaths = () => challenges.map((challengeId) => ({ params: { id: challengeId } }))