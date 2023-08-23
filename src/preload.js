const {ipcRenderer,contextBridge} = require('electron')

contextBridge.exposeInMainWorld("winAPI",{
    closeWin:async () => {
        try {
            await ipcRenderer.invoke("closeWin");
        } catch (error) {
            console.error("Error invoking closeWin:", error);
        }
    },

    maxWin:async () => {
        try {
            await ipcRenderer.invoke("maxWin");
        } catch (error) {
            console.error("Error invoking maxWin:", error);
        }
    },

    minWin:async () => {
        try{
            await ipcRenderer.invoke("minWin");
        }catch (error) {
            console.error("Error invoking minWin:", error);
        }
    }
})
//
// console.log('Preload script loaded successfully!');
// window.preloadLoaded = true;