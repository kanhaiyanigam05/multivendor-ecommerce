import React from "react";

const ProductShow = () => {
  return (
    <div className="p-4 gallery-section">
      <h2 className="text-lg font-semibold mb-2">Media</h2>
      <div className="grid grid-cols-4 gap-2 append-images ui-sortable">
        <div className="relative group cursor-drag col-span-2 row-span-2">
          <img
            src="http://icl.test/gallery/2.webp"
            alt="Image"
            className="w-full h-full object-cover rounded-lg shadow"
          />
          <input type="hidden" name="image_id[]" className="image_id" value="21" />
          <button className="remove-image absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full shadow opacity-100 group-hover:opacity-100 transition">
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>

        <div className="relative group cursor-drag">
          <img
            src="http://icl.test/gallery/03_Custom_54_2.webp"
            alt="Image"
            className="w-full h-full object-cover rounded-lg shadow"
          />
          <input type="hidden" name="image_id[]" className="image_id" value="22" />
          <button className="remove-image absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full shadow opacity-100 group-hover:opacity-100 transition">
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>

        <div className="relative group cursor-drag">
          <img
            src="http://icl.test/gallery/Buy-the-best-Red-cheese-cotton-Anarkali-kurta-with-churidar-pants-and-an-organza-dupatta-for-women-in-India.webp"
            alt="Image"
            className="w-full h-full object-cover rounded-lg shadow"
          />
          <input type="hidden" name="image_id[]" className="image_id" value="23" />
          <button className="remove-image absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full shadow opacity-100 group-hover:opacity-100 transition">
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>

        <div className="relative group cursor-drag">
          <img
            src="http://icl.test/gallery/03_Custom_fffb04ec-fe4b-4df7-8410-2d0a700bcfe6_4.webp"
            alt="Image"
            className="w-full h-full object-cover rounded-lg shadow"
          />
          <input type="hidden" name="image_id[]" className="image_id" value="24" />
          <button className="remove-image absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full shadow opacity-100 group-hover:opacity-100 transition">
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>

        <div className="relative group cursor-drag">
          <img
            src="http://icl.test/gallery/05_Custom_6ccd9d8a-bcf7-45f3-9d92-1fc11e9709fb.webp"
            alt="Image"
            className="w-full h-full object-cover rounded-lg shadow"
          />
          <input type="hidden" name="image_id[]" className="image_id" value="25" />
          <button className="remove-image absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full shadow opacity-100 group-hover:opacity-100 transition">
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductShow;
