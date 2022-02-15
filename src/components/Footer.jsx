//尾巴
// icon 超連結 聯繫資料
import React, { Component } from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

class Footer extends Component {
    state = {}
    render() {
        return (
            <div id='footerStyle'>
                <MDBFooter className='text-center text-lg-start text-muted'>
                    <section className='d-flex justify-content-center justify-content-lg-between  border-bottom'>
                        <div className='me-1 d-none d-zlg-block'>
                        </div>

                                <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-1'>
                                    <h6 className='text-uppercase fw-bold mb-1'>
                                        <i className='fas fa-gem me-2'></i> demo footer
                                    </h6>

                                </div>

                                <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-1'>
                                    <h6 className='text-uppercase fw-bold mb-1'>Contact</h6>
                                    <p>
                                        <i className='fas fa-envelope '></i>
                                        sombra551234@gmail.com
                                    </p>
                                    <p>
                                        <i className='fas fa-print'></i> +886 966210101
                                    </p>
                                </div>
                    </section>
                </MDBFooter>
            </div>
        )
    }
}

export default Footer;