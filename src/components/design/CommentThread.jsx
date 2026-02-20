import { useState } from 'react'
import { getInitials } from '../../utils/helpers'

const roleColors = {
  'Design Reviewer': 'bg-amber-100 text-amber-700',
  'Simulation Engineer': 'bg-tech-blue-light text-tech-blue',
  'Manager': 'bg-purple-100 text-purple-700',
  'Senior Designer': 'bg-hynix-red-light text-hynix-red',
  'Designer': 'bg-emerald-100 text-emerald-700',
}

export default function CommentThread({ comments }) {
  const [newComment, setNewComment] = useState('')

  return (
    <div className="space-y-4">
      {comments.map(comment => (
        <div key={comment.id} className="flex gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
          <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center text-white text-xs font-bold shrink-0">
            {getInitials(comment.author)}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-sm text-navy">{comment.author}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${roleColors[comment.role] || 'bg-gray-100 text-gray-600'}`}>
                {comment.role}
              </span>
              <span className="text-xs text-gray-400 ml-auto">{comment.date}</span>
            </div>
            <p className="text-sm text-gray-600 m-0 leading-relaxed">{comment.content}</p>
          </div>
        </div>
      ))}

      <div className="mt-4 p-4 rounded-xl border border-gray-200 bg-white">
        <textarea
          className="w-full border border-gray-200 rounded-lg p-3 text-sm resize-none focus:outline-none focus:border-hynix-red"
          rows={3}
          placeholder="Add a comment..."
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
        />
        <div className="flex justify-end mt-2">
          <button
            className="px-4 py-2 bg-hynix-red text-white rounded-lg text-sm font-semibold hover:bg-hynix-red-dark transition-colors"
            onClick={() => { alert('Comment submitted!'); setNewComment('') }}
          >
            Post Comment
          </button>
        </div>
      </div>
    </div>
  )
}
