import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    
    let query = 'SELECT * FROM clientes';
    let params = [];

    if (search) {
      query += ' WHERE nome LIKE ? OR email LIKE ?';
      params.push(`%${search}%`, `%${search}%`);
    }

    query += ' ORDER BY criado_em DESC';

    const [rows] = await pool.query(query, params);
    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    console.error("GET Clientes Error:", error);
    return NextResponse.json({ success: false, error: 'Database connection failed: ' + error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { nome, email } = await request.json();
    if (!nome) {
      return NextResponse.json({ success: false, error: 'O nome é obrigatório.' }, { status: 400 });
    }

    const [result] = await pool.query('INSERT INTO clientes (nome, email) VALUES (?, ?)', [nome, email || null]);
    return NextResponse.json({ success: true, data: { id: result.insertId, nome, email } });
  } catch (error) {
    console.error("POST Clientes Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const { id, nome, email } = await request.json();
    if (!id || !nome) {
       return NextResponse.json({ success: false, error: 'ID e Nome são obrigatórios.' }, { status: 400 });
    }

    await pool.query('UPDATE clientes SET nome = ?, email = ? WHERE id = ?', [nome, email || null, id]);
    return NextResponse.json({ success: true, data: { id, nome, email } });
  } catch (error) {
    console.error("PUT Clientes Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
       return NextResponse.json({ success: false, error: 'ID é obrigatório.' }, { status: 400 });
    }
    
    await pool.query('DELETE FROM clientes WHERE id = ?', [id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE Clientes Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
