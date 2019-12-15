// rollup-plugin-my-example.js
export default function microfrontend() {
  return {
    name: "microfrontend", // this name will show up in warnings and errors
    resolveId(source) {
      if (source === "foolib") {
        console.log("foolib");
        return source; // this signals that rollup should not ask other plugins or check the file system to find this id
      }
      return null; // other ids should be handled as usually
    },
    load(id) {
      if (id === "virtual-module") {
        return 'export default "This is virtual!"'; // the source code for "virtual-module"
      }
      return null; // other ids should be handled as usually
    }
  };
}
