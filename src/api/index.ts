import { http, httpDownload } from '@/utils/axios'

// 用户操作
export const userOperate: Record<string, any> = {
  // 密码登录
  passwordLogin: (param: object) => http.post('/api/users/login', param),
  // 登出
  loginOut: () => http.post('/api/users/logout'),
}

// 档案业务管理
export const archiveManage: Record<string, any> = {
  // 检索整编库档案
  searchGeneralStoreArchive: (param: object) =>
    http.post('/api/archives/arrangements/query', param),
  // 检索长期保存库档案
  searchLongStoreArchive: (param: object) =>
    http.post('/api/archives/preservation/query', param),
  // 预归档库档案整编
  reorganizePreArchived: (param: object) =>
    http.post('/api/archives/arrangements', param),
  // 获取档案信息
  getArchiveInfo: (id: number | string) =>
    http.get(`/api/archives/${id}/content`),
  // 获取档案元数据
  getArchiveMetas: (id: number | string) =>
    http.get(`/api/archives/${id}/metas`),
  // 新建档案
  addArchive: (param: object) => http.post('/api/archives', param),
  // 获取档案编号预览
  getPreviewCode: (param: object) =>
    http.post('/api/archives/preview-code', param),
  // 批量删除档案
  batchDeleteArchive: (param: []) => http.put('/api/archives', param),
  // 批量档案
  batchArchive: (param: []) => http.post('/api/archives/submit-archive', param),
  // 更新档案
  updateArchive: (id: number | string, param: object) =>
    http.put(`/api/archives/${id}`, param),
  // 下载档案
  downloadArchiveInfo: (id: number | string) =>
    httpDownload.get(`/api/archives/${id}/downloads`),
}

// 档案文件管理
export const archiveFileManage: Record<string, any> = {
  // 检索预归档文件
  searchPreArchivedFile: (param: object) =>
    http.post('/api/archive-files/pre-archived/query', param),
  // 新建预归档文件
  addPreArchivedFile: (param: any) =>
    http.post('/api/archive-files/pre-archived', param),
  // 获取档案文件信息
  getArchiveFileInfo: (id: number | string) =>
    http.get(`/api/archive-files/${id}`),
  // 更新档案文件信息
  updateArchiveFileInfo: (id: number | string, param: object) =>
    http.put(`/api/archive-files/${id}`, param),
  // 获取档案文件流
  getArchiveFileStream: (id: number | string) =>
    httpDownload.get(`/api/archive-files/${id}/datas`),
  // 新建档案文件
  addArchiveFile: (param: any) => http.post('/api/archive-files', param),
  // 批量删除档案文件
  batchDeleteArchiveFile: (param: []) => http.put('/api/archive-files', param),
  // 更新档案文件排序
  updateArchiveFileSort: (id: number | string, param: object) =>
    http.put(`/api/archive-files/${id}/orders`, param),
}

// 全宗管维护
export const generalManage: Record<string, any> = {
  // 获取全宗树结构
  getGeneralTree: () => http.get('/api/fonds/tree'),
  // 更新全宗树结构
  updateGeneralTree: (param: object) => http.put('/api/fonds/tree', param),
  // 浏览全宗树结构
  viewGeneralTree: () => http.get('/api/fonds/view-tree'),
  // 获取全宗
  getGeneral: (id: number | string) => http.get(`/api/fonds/${id}`),
  // 新建全宗
  addGeneral: (param: object) => http.post('/api/fonds', param),
  // 更新全宗
  updateGeneral: (id: number | string, param: object) =>
    http.put(`/api/fonds/${id}`, param),
  // 删除全宗
  deleteGeneral: (id: number | string) => http.delete(`/api/fonds/${id}`),
}

// 元数据维护
export const metaManage: Record<string, any> = {
  // 获取元数据列表
  getMetaList: (param: object) => http.get('/api/metas', param),
  // 根据载体形式获取元数据列表
  getMetaByCarrierType: (id: number | string) =>
    http.get(`/api/format-types/${id}/metas`),
  // 新建元数据
  addMeta: (param: object) => http.post('/api/metas', param),
  // 更新元数据
  updateMeta: (id: number | string, param: object) =>
    http.put(`/api/metas/${id}`, param),
  // 删除元数据
  deleteMeta: (id: number | string) => http.delete(`/api/metas/${id}`),
  // 获取元数据表单列表
  getMetaFormList: (param: object) => http.get('/api/metas/forms', param),
  // 新建元数据表单
  addMetaForm: (param: object) => http.post('/api/metas/forms', param),
  // 更新元数据表单
  updateMetaForm: (id: number | string, param: object) =>
    http.put(`/api/metas/forms/${id}`, param),
  // 删除元数据表单
  deleteMetaForm: (id: number | string) =>
    http.delete(`/api/metas/forms/${id}`),
}

// 字典维护
export const dictionaryManage: Record<string, any> = {
  // 获取档案类别列表
  getArchieveTypeList: (param: object) =>
    http.get('/api/dictionaries/archive-types', param),
  // 新建档案类别
  addArchieveType: (param: object) =>
    http.post('/api/dictionaries/archive-types', param),
  // 更新档案类别
  updateArchieveType: (id: number | string, param: object) =>
    http.put(`/api/dictionaries/archive-types/${id}`, param),
  // 删除档案类别
  deleteArchieveType: (id: number | string) =>
    http.delete(`/api/dictionaries/archive-types/${id}`),
  // 获取载体形式列表
  getCarrierTypeList: (param: object) =>
    http.get('/api/dictionaries/format-types', param),
  // 新建载体形式
  addCarrierType: (param: object) =>
    http.post('/api/dictionaries/format-types', param),
  // 更新载体形式
  updateCarrierType: (id: number | string, param: object) =>
    http.put(`/api/dictionaries/format-types/${id}`, param),
  // 删除载体形式
  deleteCarrierType: (id: number | string) =>
    http.delete(`/api/dictionaries/format-types/${id}`),
}

// 方案配置
export const schemeConfig: Record<string, any> = {
  // 获取目录列表
  getCatalogList: (param: object) => http.get('/api/catalogs', param),
  // 新建目录
  addCatalog: (param: object) => http.post('/api/catalogs', param),
  // 更新目录
  updateCatalog: (id: number | string, param: object) =>
    http.put(`/api/catalogs/${id}`, param),
  // 删除目录
  deleteCatalog: (id: number | string) => http.delete(`/api/catalogs/${id}`),
  // 获取方案列表
  getSchemeList: (param: object) => http.get('/api/schemes', param),
  // 新建方案
  addScheme: (param: object) => http.post('/api/schemes', param),
  // 更新方案
  updateScheme: (id: number | string, param: object) =>
    http.put(`/api/schemes/${id}`, param),
  // 删除方案
  deleteScheme: (id: number | string) => http.delete(`/api/schemes/${id}`),
  // 获取目录方案树结构
  getCatalogSchemeTree: (id: number | string) =>
    http.get(`/api/schemes/${id}/catalogs`),
  // 更新目录方案树结构
  updateCatalogSchemeTree: (id: number | string, param: Array<object>) =>
    http.put(`/api/schemes/${id}/catalogs`, param),
  // 根据档案类别获取目录树结构
  getTreeByArchieveType: (id: number | string) =>
    http.get(`/api/archive-types/${id}/catalogs`),
}

// 编码维护
export const codeManage: Record<string, any> = {
  // 获取编码规则列表
  getCodeRuleList: (param: object) =>
    http.get('/api/archive-code-rules', param),
  // 新建编码规则
  addCodeRule: (param: object) => http.post('/api/archive-code-rules', param),
  // 更新编码规则
  updateCodeRule: (id: number | string, param: object) =>
    http.put(`/api/archive-code-rules/${id}`, param),
  // 删除编码规则
  deleteCodeRule: (id: number | string) =>
    http.delete(`/api/archive-code-rules/${id}`),
}

// 组织机构维护
export const organizationManage: Record<string, any> = {
  // 获取组织机构树结构
  getOrganizationTree: () => http.get('/api/organizations/tree'),
  // 更新组织机构树结构
  updateOrganizationTree: (param: []) =>
    http.put('/api/organizations/tree', param),
  // 新建组织机构
  addOrganization: (param: object) => http.post('/api/organizations', param),
  // 更新组织机构
  updateOrganization: (id: number | string, param: object) =>
    http.put(`/api/organizations/${id}`, param),
  // 删除组织机构
  deleteOrganization: (id: number | string) =>
    http.delete(`/api/organizations/${id}`),
  // 获取组织机构全宗关联
  getOrganizationGeneral: (id: number | string) =>
    http.get(`/api/organizations/${id}/fonds`),
  // 更新组织机构全宗关联
  updateOrganizationGeneral: (id: number | string, param: object) =>
    http.put(`/api/organizations/${id}/fonds`, param),
}
