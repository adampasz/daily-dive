""""""""""""""""""""""""""""
""" BASIC SETTINGS
""""""""""""""""""""""""""""
set nocompatible              " be iMproved, required
" don't create and leave temp files
set noswapfile
set nowritebackup " was causing issues with file watcher
" highlight search results 
set hlsearch
" Improve tab completion in command bar
set wildmode=list:longest,full
" tabs
autocmd FileType * set tabstop=2 | set shiftwidth=2
set expandtab
" line numbers
autocmd InsertEnter * :set number
autocmd InsertLeave * :set relativenumber
set relativenumber
" persist undos - assumes .vim/undo dir exists!
" see http://stackoverflow.com/questions/5700389/using-vims-persistent-undo
set undofile                " Save undo's after file closes
set undodir=$HOME/.vim/undo " where to save undo histories
set undolevels=1000         " How many undos
set undoreload=10000        " number of lines to save for undo
set hidden                  " Don't force save when changing buffers

" cursor lines
set cursorline
set cursorcolumn
set colorcolumn=120

syntax on

" make cursorlines brighter in insert mode
autocmd InsertEnter * hi CursorLine ctermbg=17 guibg=#222232
autocmd InsertLeave * hi CursorLine ctermbg=233 guibg=#111111

" support italics in terminal
" http://stackoverflow.com/questions/3494435/vimrc-make-comments-italic
autocmd BufRead,BufNewFile * highlight Comment cterm=italic
autocmd BufRead,BufNewFile * highlight String cterm=italic
autocmd BufRead,BufNewFile * highlight LineNr cterm=italic
let &t_ZH="\e[3m"
let &t_ZR="\e[23m"

""""""""""""""
" MAPPINGS
""""""""""""""
" inoremap <S-TAB> <C-X><C-O>
nnoremap } :bnext<CR>
nnoremap { :bprevious<CR>

let mapleader = "\\"
nmap <silent> <leader>- :bd<CR>  
nmap <silent> <leader>= :wincmd w<CR>
nmap <silent> <leader>+ :only<CR>
let mapleader = ","
nmap <leader>V :source $MYVIMRC<CR>
nmap <leader>v :tabedit $MYVIMRC<CR>

command W w

""""""""""""""
" SOURCE OTHER RC FILES HERE 
""""""""""""""
if filereadable(expand("~/.vim/rcs/ts-vimrc.vim"))
  source ~/.vim/rcs/ts-vimrc.vim
endif

if filereadable(expand("~/.vimrc.local"))
  source ~/.vimrc.local
endif

