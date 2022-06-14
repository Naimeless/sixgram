export const getImage = (res) => {
    let result = '';
    const byteArray = new Uint8Array(res)
        const blob = new Blob([byteArray])
        const fileReaderInstance = new FileReader()
        fileReaderInstance.readAsDataURL(blob)
        debugger
        fileReaderInstance.onloadend = () => {
          if (fileReaderInstance.result) {
            result = `data:image/jpeg;${fileReaderInstance.result.toString()}`;
          } else {
            throw Error(fileReaderInstance.error?.message)
          }
        }
        return result
};