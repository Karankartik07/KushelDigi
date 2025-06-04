import React from 'react'


export default function Test() {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle w-75" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Students
            </button>
            <ul className="dropdown-menu p-2">
                <li ><a

                    className="list-group-item list-group-item-action  active mb-1"
                    aria-current="true"
                >
                    <i className="bi bi-house-exclamation"></i>
                    <span className=" float-right">Home</span>
                </a></li>

                <li>
                    <a

                        className="list-group-item list-group-item-action active mb-1"
                        aria-current="true"
                    >
                        <i className="bi bi-list-check"></i>
                        <span className="float-right">Topper</span>
                    </a>
                </li>

                <li>
                    <a

                        className="list-group-item list-group-item-action active mb-1"
                        aria-current="true"
                    >
                        <i className="bi bi-list-columns"></i>
                        <span className="float-right">Ex-Topper</span>
                    </a>
                </li>

                <li>
                    <a

                        className="list-group-item list-group-item-action active mb-1"
                        aria-current="true"
                    >
                        <i className="bi bi-list-columns"></i>
                        <span className="float-right">Passout</span>
                    </a>
                </li>


                <li>
                    <a

                        className="list-group-item list-group-item-action active mb-1"
                        aria-current="true"
                    >
                        <i className="bi bi-list-columns"></i>
                        <span className="float-right">Intermediate</span>
                    </a>
                </li>

                <li>
                    <a

                        className="list-group-item list-group-item-action active mb-1"
                        aria-current="true"
                    >
                        <i className="bi bi-list-columns"></i>
                        <span className="float-right">High School</span>
                    </a>
                </li>



            </ul>
        </div>
    )
}
