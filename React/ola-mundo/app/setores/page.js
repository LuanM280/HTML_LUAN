"use client";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Setores() {
    const [setor, setSetor] = useState("");

    return (
        <div className="dropdown" data-bs-theme="dark">
            <h1>SETORES</h1>

           
            <select
                className="Setores"
                value={setor}
                onChange={(e) => setSetor(e.target.value)}
            >
                <option value="">Selecione um Setor</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

            <table className="table table-primary table-striped-stripedtable table-primary table-hover  table-sm">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>John</td>
                        <td>Doe</td>
                        <td>@social</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}