import config from '../../config'

const env_path = process.env.NODE_ENV == 'production' ? config.build.contextPath : config.dev.contextPath

export{
    env_path
}