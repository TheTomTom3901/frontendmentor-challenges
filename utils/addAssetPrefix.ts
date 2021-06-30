const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

const addAssetPrefix = (asset) => `${prefix}/${asset}`

export default addAssetPrefix