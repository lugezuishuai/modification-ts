//Map中通过value找到key
export default function getKeyByValue(map: Map<string, string>, searchValue: string) {
    for (let [key, value] of map.entries()) {
      if (value === searchValue)
        return key;
    }
}