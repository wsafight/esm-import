/**
 * TODO 这里需要考虑 node_modules 不存在的问题
 */

const dynamicImport = (path: string) => import(path);

export { dynamicImport };

export default dynamicImport;
