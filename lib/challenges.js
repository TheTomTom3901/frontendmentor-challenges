import fs from 'fs'
import path from 'path'

const challengesDirectory = path.join(process.cwd(), 'challenges')
const challenges = fs.readdirSync(challengesDirectory)

export const getChallenges = () => challenges.map(challengeId => getChallenge(challengeId))

export const getChallenge = (id) => ({
  id,
  ...JSON.parse(fs.readFileSync(path.join(challengesDirectory, id, 'config.json')))
})

export const getAllChallengeIds = () => challenges.map(challengeId => ({ params: { id: challengeId } }))