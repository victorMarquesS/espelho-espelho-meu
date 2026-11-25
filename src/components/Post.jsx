import { useLikes } from '../hooks/likes.js'; 
import { useComments } from "../hooks/comentarios.js"; 
import { FiBookmark, FiHeart, FiMessageCircle, FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa';

function Post({ post }) {
  const { isLiked, likesCount, toggleLike } = useLikes(post.likes);
  
  // CORRIGIDO: Passamos post.comments e desestruturamos tudo que o hook retorna
  const { comments, newComment, setNewComment, addComment } = useComments(post.comments);

  return (
    <article className="post">
      <header className="post__header">
        <img className="post__avatar" src={post.avatar} alt={`Foto de ${post.user}`} />
        <div className="post__user"><strong>{post.user}</strong>
          <span>{post.location}</span>
        </div>
        <button className="icon-button post__more" type="button" aria-label="Mais opções">
          <FiMoreHorizontal />
        </button>
      </header>
      
      <img className="post__image" src={post.image} alt={post.alt} />
      
      <div className="post__content">
        <div className="post__actions">
          
          <button 
            className="icon-button" 
            type="button" 
            aria-label={isLiked ? "Descurtir" : "Curtir"}
            onClick={toggleLike}
          >
            {isLiked ? <FaHeart color="#ed4956" /> : <FiHeart />}
          </button>
          
          <button className="icon-button" type="button" aria-label="Comentar">
            <FiMessageCircle />
          </button>
          <button className="icon-button" type="button" aria-label="Enviar">
            <FiSend />
          </button>
          <button className="icon-button" type="button" aria-label="Salvar">
            <FiBookmark />
          </button>
        </div>
        
        <p className="post__likes"><strong>{likesCount} curtidas</strong></p>
        <p className="post__caption"><strong>{post.user}</strong> {post.caption}</p>

        {/* --- ADICIONADO AQUI: ÁREA DE COMENTÁRIOS --- */}
        <div className="post__comments-section">
          
          {/* Lista de Comentários */}
          <div className="post__comments-list">
            {comments.map((comment) => (
              <p key={comment.id} className="post__comment">
                <strong>{comment.user}</strong> {comment.text}
              </p>
            ))}
          </div>

          {/* Formulário para adicionar novo comentário */}
          <form className="post__comment-form" onSubmit={addComment}>
            <input 
              type="text" 
              placeholder="Adicione um comentário..." 
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button 
              type="submit" 
              disabled={newComment.trim() === ""} 
              className="post__comment-submit"
            >
              Publicar
            </button>
          </form>
        </div>
        
      </div>
    </article>
  )
}

export default Post;