import { useCallback } from "react";
import Swal from "sweetalert2";

const useSweetAlert = () => {
  const showConfirmDelete = useCallback(async (onConfirm) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed && onConfirm) {
      try {
        await onConfirm(); // ✅ wait for deletion
        await Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      } catch (error) {
        await Swal.fire({
          title: "Error!",
          text: "Something went wrong while deleting.",
          icon: "error",
        });
      }
    }
  }, []);

  return { showConfirmDelete };
};

export default useSweetAlert;
