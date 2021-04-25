import simpleGit from 'simple-git'

const thisFolder = process.cwd()

const git = simpleGit({
  baseDir: thisFolder,
}) /* .outputHandler((bin, stdout, stderr, args) => {
  stdout.on('data', d => {
    console.log(d.toString())
  })
}) */

export default git
