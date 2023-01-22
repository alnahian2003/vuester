import Swal from "sweetalert2";

export function useFlash() {
  function flash(title = "Information", message, type = "info") {
    return Swal.fire(title, message, type);
  }

  return { flash };
}
