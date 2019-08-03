# Some hacks for improving local shell


- ## Git Branch name in Shell PROMPT
```shell script
parse_git_branch() {
     git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}
PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\[\033[33m\]$(parse_git_branch)\[\033[00m\]\$ '
```

- ## Git Command Complition
```shell script
wget -O ~/.git-completion.bash https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash

# add to ~/.bashrc
~/.git-completion.bash
```

- ## Python3 as default python
```shell script
alias python='python3'
alias pip='pip3'
```

- ## odrive aliases
```shell script
alias odrive='python3 "$HOME/.odrive-agent/bin/odrive.py"'
alias odrivestart='nohup "$HOME/.odrive-agent/bin/odriveagent" > /dev/null 2>&1 &'
```

- ## sort ls command for hidden files
```shell script
alias ll='ls -alFv'
```
