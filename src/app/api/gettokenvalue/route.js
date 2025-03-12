import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { unstable_noStore as noStore } from 'next/cache';
export async function GET(request) {
  noStore();
  
  try {
    const result =
      await sql`SELECT * FROM today_tokens_data WHERE DATE(recorded_at) = CURRENT_DATE ;`;
      console.log("result:",result.rows)
      if(result.rowCount===0 )
        {
          // const result_prev = await sql`select today_tokens_data.*
          // from today_tokens_data where today_tokens_data.recorded_at 
          // = (select max(t2.recorded_at) from today_tokens_data t2 
          // where t2.token_id = today_tokens_data.token_id and  t2.value!=0) ;`
          // console.log(result_prev.rows);
          const result_prev = await sql`SELECT * FROM today_tokens_data WHERE DATE(recorded_at) = CURRENT_DATE-1 ;`;
          console.log("result:",result_prev.rows)
          return NextResponse.json({result: result_prev.rows }, { status: 200 });
        }
        // AND token_id = 1;`;
    // console.log("result.rows",result.rows);
    return NextResponse.json({result: result.rows }, { status: 200 });
  } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
  }
}