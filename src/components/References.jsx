
import { db } from "@/app/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
import LikeBtn from "@/Components/LikeBtn";

export default async function References({ params }) {
  const source = await params.source; 

  const validSources = ["coursemates", "colleagues", "fandf"];
  if (!validSources.includes(source)) {
    return <p className="text-red-500">Invalid reference type.</p>;
  }

  const query = await db.query(`SELECT * FROM ${source} ORDER BY ${source}_id DESC`);
  const userentry = query.rows;

  async function handleSubmit(formData) {
    "use server";
  
    const name = formData.get("name");
    const comment = formData.get("comment");
  
    const result = await db.query(
      `INSERT INTO ${source} (name, comment) VALUES ($1, $2) RETURNING ${source}_id`,
      [name, comment]
    );
    const source_id = result.rows[0][`${source}_id`];
  
    let insertQuery = "";
    let insertValue = [];
  
    if (source === "coursemates") {
      insertQuery = `INSERT INTO all_ref (name, comment, source, coursemates_id) VALUES ($1, $2, $3, $4)`;
      insertValue = [name, comment, source, source_id];
    } else if (source === "colleagues") {
      insertQuery = `INSERT INTO all_ref (name, comment, source, colleagues_id) VALUES ($1, $2, $3, $4)`;
      insertValue = [name, comment, source, source_id];
    } else if (source === "fandf") {
      insertQuery = `INSERT INTO all_ref (name, comment, source, fandf_id) VALUES ($1, $2, $3, $4)`;
      insertValue = [name, comment, source, source_id];
    }
  
    await db.query(insertQuery, insertValue);
  
    revalidatePath(`/references/${source}`);
    redirect(`/references/${source}`);
  }

  async function deleteComment(id) {
    "use server";

    await db.query(`DELETE FROM ${source} WHERE ${source}_id = $1`, [id]);
    await db.query(`DELETE FROM all_ref WHERE reference_id = $1 AND source = $2`, [id, source]);

    revalidatePath(`/references/${source}`);
    redirect(`/references/${source}`);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e] text-white">
      <div className="max-w-xl mx-auto p-6 space-y-6">
        <div className="neumorphic p-6 rounded-lg">
          <form action={handleSubmit} className="space-y-4">
            <fieldset>
              <legend className="text-lg font-bold mb-4 text-white">
                Leave a Reference ({source})
              </legend>

              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 rounded neumorphic border-0 text-white placeholder-gray-400 focus:neumorphic-hover"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="comment" className="block text-sm font-medium text-gray-300">Comment</label>
                <input
                  type="text"
                  name="comment"
                  required
                  className="w-full p-3 rounded neumorphic border-0 text-white placeholder-gray-400 focus:neumorphic-hover"
                  placeholder="Your comment"
                />
              </div>
            </fieldset>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-orange-600 hover:to-orange-700 text-white px-4 py-3 rounded neumorphic hover:neumorphic-hover transition-all duration-500"
            >
              Post
            </button>
          </form>
        </div>

        <Link href="/" className="inline-block neumorphic px-4 py-2 rounded text-primary hover:neumorphic-hover hover:bg-orange-600/20 hover:text-orange-200 transition-all duration-500">
          ← Back to Home
        </Link>

        <h2 className="text-xl font-semibold mt-6 mb-4 text-white">All References</h2>

        {userentry.length === 0 ? (
          <p className="text-gray-300 text-center py-8">No comments yet.</p>
        ) : (
          <div className="space-y-4">
            {userentry.map((user) => (
              <div key={user[`${source}_id`]} className="neumorphic p-4 rounded-lg hover:neumorphic-hover transition-all duration-500">
                <h3 className="font-bold text-white mb-2">{user.name}</h3>
                <p className="text-gray-300 mb-3">{user.comment}</p>
                {user.time && (
                  <p className="text-sm text-gray-400 mb-3">
                    {new Date(user.time).toDateString()}
                  </p>
                )}
                <div className="flex items-center justify-between">
                  <form action={deleteComment.bind(null, user[`${source}_id`])}>
                    <button
                      type="submit"
                      className="text-red-400 hover:text-orange-400 underline transition-colors duration-500"
                    >
                      Delete
                    </button>
                  </form>
                  <LikeBtn />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
