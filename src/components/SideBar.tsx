import { useState } from 'react';

function SideBar() {
  const [_isOpen, setIsOpen] = useState(false);

  return (
    <>
      <label
        htmlFor="drawer-toggle"
        className="drawer-overlay"
        onClick={() => setIsOpen(false)}
      ></label>
      <aside className="menu p-4 w-80 bg-base-200 text-base-content h-screen">
        {/* ヘッダー（アイコン + アプリ名） */}
        <div className="flex items-center px-3">
          <img src="/pixie.png" alt="PIXIE Logo" className="w-10 h-10" />
          <h1 className="text-4xl font-bold">PIXIE</h1>
        </div>

        <ul>
          {/* 大項目 */}
          <li className="mt-4">
            <span className="text-lg font-semibold">設定</span>
            <ul className="pl-4 mt-2 space-y-2">
              {/* 中項目 */}
              <li>
                <span className="text-md font-medium">表示設定</span>
                <div className="mt-1">
                  <label className="label">
                    <span className="label-text">スケールバーの長さ</span>
                  </label>
                  <input
                    type="number"
                    className="input input-bordered w-full"
                    placeholder="100"
                  />
                </div>
              </li>
              <li>
                <span className="text-md font-medium">画像設定</span>
                <div className="mt-1">
                  <label className="label">
                    <span className="label-text">解像度</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="300 dpi"
                  />
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default SideBar;
