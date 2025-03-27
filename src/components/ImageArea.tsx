import { Rnd } from 'react-rnd';

function ImageArea() {
  return (
    <div className="bg-base-100 flex items-center justify-center h-screen">
      <div className="bg-green-100 flex flex-col items-center justify-center w-full h-full">
        <Rnd>
          <div style={{ border: '2px solid blue', padding: 5 }}>
            テストコンポーネント
          </div>
        </Rnd>
        <p className="mb-4 text-lg font-semibold text-gray-700">画像を選択</p>
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          開く
        </button>
      </div>
    </div>
  );
}

export default ImageArea;
