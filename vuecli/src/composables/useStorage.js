import { ref, watch } from "vue";
import { debounce } from "lodash";

export function useStorage(key, val = null) {
  let storedVal = read();

  if (storedVal) {
    val = ref(storedVal);
  } else {
    val = ref(val);

    save();
  }

  // Save the value in localStorage
  function save() {
    if (val.value === "" || val.value === undefined || val.value === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(val.value));
    }
  }

  function read() {
    return JSON.parse(localStorage.getItem(key));
  }

  // Watch for changes in the value
  watch(
    val,
    debounce(() => {
      save();
    }, 300)
  );

  return val;
}
