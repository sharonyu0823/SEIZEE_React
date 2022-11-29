import './../styles/Modal.scss'
import React from 'react'

function ModalNotification() {
  return (
    <>
      <div className="s_modal_body" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <p className="modal-title" id="modal_header">
                登入
              </p>
              <div className="cross-btn">
                <i className="fa-sharp fa-solid fa-xmark"></i>
              </div>
            </div>
            {/* <!-- Modal body --> */}
            <div className="modal-body" id="modal_body">
              登入成功
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button type="button" className="modal-btn" id="modal_footer">
                確認
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalNotification
