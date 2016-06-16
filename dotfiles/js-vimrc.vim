""""""""""""""""""""""
" MAPPINGS
""""""""""""""""""""""
nmap <leader>W :set wildignore=*.js,*.map<CR>

""""""""""""""""""""""
" PLUGINS
""""""""""""""""""""""

" Typescript Syntax 
Plugin 'leafgarland/typescript-vim'

" Typescript Completion
Plugin 'Shougo/vimproc.vim' " Need to run `make` manually

Plugin 'Chiel92/vim-autoformat'

Plugin 'Quramy/tsuquyomi' 
let g:tsuquyomi_completion_detail = 1
" Type <C-]> in normal mode or visual mode, Tsuquyomi navigates to the location where the symbol under the cursor is defined.
" And type <C-t> , Tsuquyomi moves the cursor to the location where the last <C-]> was typed.
" Type <C-^> in normal mode or visual mode, Tsuquyomi shows a list of location where the symbol under the cursor is referenced.

"ignore .js and .map files in edit file path
