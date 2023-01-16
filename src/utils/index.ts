// url转key-value对象
export function param2Obj(url: string): object {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    `{"${decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
      .replace(/\+/g, ' ')}"}`
  )
}

// 文件流转uint8array
export function getUint8Array(base64Str: any) {
  const data = base64Str.replace(/[\n\r]/g, '')
  const raw = window.atob(data)
  const rawLength = raw.length
  const array = new Uint8Array(new ArrayBuffer(rawLength))
  for (let i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i)
  }
  return array
}

// 递归tree获取所需数据
export function treeDataGetNode(data: Array<any>, isPdf: boolean) {
  const res = []
  function child(v: any) {
    if (v.children && v.children.length > 0) {
      for (let i = 0; i < v.children.length; i++) {
        res.push({ ...v.children[i], categoryId: v.id })
        child(v.children[i])
      }
    }
  }
  for (let k = 0; k < data.length; k++) {
    res.push(data[k])
    if (data[k].children && data[k].children.length > 0) {
      child(data[k])
    }
  }
  const setRes = Array.from(new Set(res))
  if (isPdf) {
    return setRes.filter((item) => !item.children)
  }
  return setRes
}

// 递归tree删除指定节点
export function treeDataDeleteNode(data: Array<any>, treeId: any) {
  function child(v: any) {
    if (v.children && v.children.length > 0) {
      for (let i = 0; i < v.children.length; i++) {
        if (String(treeId) === String(v.children[i].id)) {
          v.children.splice(i, 1)
          i--
        }
        if (i >= 0) {
          child(v.children[i])
        }
      }
    }
  }
  for (let k = 0; k < data.length; k++) {
    if (String(treeId) === String(data[k].id)) {
      data.splice(k, 1)
      k--
    }
    if (k >= 0 && data[k].children && data[k].children.length > 0) {
      child(data[k])
    }
  }
  return data
}
