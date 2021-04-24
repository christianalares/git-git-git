import { execSync } from 'child_process'

const exec = command => {
  execSync(command, { stdio: 'pipe' })
}

export default exec
